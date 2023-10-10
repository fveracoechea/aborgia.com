import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { FormErrors, validateSchema } from 'shared/formErrors';

import { z } from 'zod';

export type ValidatedFormSubmit<Schema extends z.ZodTypeAny> = (
  values: z.infer<Schema>,
  event: FormEvent<HTMLFormElement>,
) => void;

export function validateEntries<Schema extends z.ZodTypeAny>(
  entries: IterableIterator<[string | number, unknown]>,
  schema: Schema,
): z.infer<Schema> {
  return schema.parse(Object.fromEntries(entries));
}

function isInputElement(element: unknown): element is HTMLInputElement | HTMLTextAreaElement {
  return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
}

export function useFormValidation<Schema extends z.AnyZodObject>(
  formSchema: Schema,
  handleSubmit?: ValidatedFormSubmit<Schema>,
) {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<FormErrors<Schema>>({});

  /**
   * Valiates every input and sets and error message if invalid.
   * Prevents default form event if any error is found
   */
  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      const data = new FormData(event.currentTarget);
      const result = validateSchema(data, formSchema);

      if (result.success) {
        if (handleSubmit) handleSubmit(result.values, event);
      } else {
        setError(result.errors);
        event.preventDefault();
      }
    },
    [formSchema, handleSubmit],
  );

  /**
   * Adds `onBlur` event listeners to every input.
   * The lisntener will clear a given input error on blur.
   */
  useEffect(() => {
    if (!formRef.current?.elements) return;

    const listeners = new Set<() => void>();

    function onBlur(event: Event) {
      const target = event.target;
      if (isInputElement(target) && error[target.name]) {
        setError({ ...error, [target.name]: null });
      }
    }

    function onChange(event: Event) {
      const target = event.target;
      if (target instanceof HTMLSelectElement && error[target.name]) {
        setError({ ...error, [target.name]: null });
      }
    }
    // Add onBlur listeners to every input, and save it for cleanup
    for (const input of formRef.current.elements) {
      if (input instanceof HTMLSelectElement) {
        input.addEventListener('change', onChange);
        listeners.add(() => input.removeEventListener('change', onChange));
        continue;
      }
      if (isInputElement(input)) {
        input.addEventListener('blur', onBlur);
        listeners.add(() => input.removeEventListener('blur', onBlur));
      }
    }
    // Remove listeners on cleanup
    return () => listeners.forEach(remove => remove());
  }, [formSchema, error]);

  return {
    formProps: {
      ref: formRef,
      onSubmit,
      noValidate: true,
    },
    errors: error,
  };
}
