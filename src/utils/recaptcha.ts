import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";

interface CreateAssessmentOptions {
	projectID: string;
	recaptchaKey: string;
	token: string;
	recaptchaAction: string;
}

/**
 * Create an assessment to analyze the risk of a UI action.
 */
export async function createAssessment({
	projectID,
	recaptchaKey,
	token,
	recaptchaAction,
}: CreateAssessmentOptions): Promise<number | null> {
	const client = new RecaptchaEnterpriseServiceClient();
	const projectPath = client.projectPath(projectID);

	const request = {
		assessment: {
			event: {
				token,
				siteKey: recaptchaKey,
			},
		},
		parent: projectPath,
	};

	const [response] = await client.createAssessment(request);

	if (!response.tokenProperties?.valid) {
		console.log(
			`The CreateAssessment call failed because the token was: ${response.tokenProperties?.invalidReason}`,
		);
		return null;
	}

	if (response.tokenProperties?.action === recaptchaAction) {
		console.log(`The reCAPTCHA score is: ${response.riskAnalysis?.score}`);
		response.riskAnalysis?.reasons?.forEach((reason) => {
			console.log(reason);
		});

		return response.riskAnalysis?.score ?? null;
	}

	console.log(
		"The action attribute in your reCAPTCHA tag does not match the action you are expecting to score",
	);
	return null;
}
