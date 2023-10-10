import { Dict } from './en';

export const es: Dict = {
  siteName: 'Arelys Borgia Agente de Seguros',
  keywords: 'salud, vida, seguro, ObamaCare, cobertura',
  header: {
    nav1: 'Navegacion primaria',
    nav2: 'Idiomas y Enlaces de contacto',
    lang: 'Elige tu idioma',
    follow: 'Sigueme en Istagram',
    services: 'Coberturas',
    quote: 'Cotización Gratis',
    blog: 'Noticias',
    aboutMe: 'Acerca de Mí',
  },
  hero: {
    title: 'Cobertura médica a tu alcance',
    tagline: 'TE GUIAMOS EN CADA PASO',
  },
  values: {
    '1': 'Integridad',
    '2': 'Pasión',
    '3': 'Excelencia de servicio',
    '4': 'Inclusión',
    '5': 'Satisfacción',
    '6': 'Colaboración',
  },
  coverages: {
    title: '¡Consigue la mejor cobertura de salud al mejor precio!',
    '1': {
      name: 'ObamaCare',
      description:
        'Es una reforma de salud en los EE.UU. que amplía y mejora el acceso a la atención médica y reduzca el gasto a través de regulaciones e impuestos.',
    },
    '2': {
      name: 'Protección Hipotecaria',
      description:
        'Es un tipo de póliza de seguro que ayuda a su familia a hacer los pagos mensuales de su hipoteca si muere antes de que su hipoteca esté totalmente pagada. Algunas pólizas también ofrecerán cobertura por un tiempo limitado si pierde su trabajo o queda discapacitado después de un accidente.',
    },
    '3': {
      name: 'Seguro de vida',
      description:
        'Cuanto cuesta la tranquilidad? Sabías que tu dinero puede crecer con nuestras pólizas de Vida? Ahorrar para la Universidad de tus hijos, Ahorrar para mi retiro. A la vez te protegen con beneficios en Vida: Pago por Enfermedad Terminal, Pago por Enfermedad Crónica, Pago por enfermedad Crítica, Pago por lesión Crítica, Pago en caso de Fallecimiento.',
    },
    '4': {
      name: 'Gastos Finales',
      description:
        'El seguro de gastos finales es un tipo de seguro de vida entera diseñado para cubrir gastos médicos y gastos funerarios cuando usted fallece. Una póliza de gastos finales también se conoce como un seguro funerario o de entierro y es popular entre las personas mayores.',
    },
  },
  other: 'Otro',
  quote: {
    name: {
      label: 'Nombre',
      required: 'Se requiere el nombre.',
      min: 'El nombre es muy corto.',
    },
    email: {
      label: 'Email',
      invalid: 'Introduzca un correo electrónico válido.',
      required: 'Correo electronico es requerido.',
    },
    phone: {
      label: 'Número de teléfono',
      required: 'Se requiere número de teléfono.',
      invalid: 'Introduce un número de teléfono válido.',
    },
    additionalInfo: {
      label: 'Información adicional',
      max: 'La información adicional no debe exceder los 500 caracteres.',
    },
    insurance: {
      label: 'Cobertura de seguro',
      placeholder: 'Selecciona un tipo de aseguranza',
      required: 'Selecciona un tipo de aseguranza.',
    },
    acknowledgement: {
      label: 'Reconozco que al hacer clic en enviar, acepto los Términos y el Aviso de privacidad.',
      required:
        'Para utilizar nuestros servicios, debe aceptar nuestros Términos y Aviso de privacidad. Por favor marque la casilla para confirmar.',
    },
    recaptcha: {
      required: 'Se requiere verificación reCAPTCHA.',
    },
    success:
      '¡Gracias! Hemos recibido su información y nos comunicaremos con usted lo antes posible con un presupuesto personalizado.',
    error:
      'Lo sentimos, nuestro servidor encontró un problema al procesar su solicitud. Por favor, inténtelo de nuevo más tarde.',
    uniqueError:
      'Parece que ya has enviado una solicitud de cotización anteriormente. Estamos trabajando en ello y nos comunicaremos con usted lo antes posible.',
    submit: 'Enviar Cotización',
  },
  footer: 'Cuida tu presente mirando hacia el futuro.',
};
