export class HttpError extends Error {
	public status: number;
	public title: string;
	public detail: string;

	public static newHttpError(obj: {
		status?: number;
		title?: string;
		detail?: string;
	}) {
		const newHttpError = new HttpError();
		if (obj.status) {
			newHttpError.status = obj.status;
		}
		if (obj.title) {
			newHttpError.title = obj.title;
		}
		if (obj.detail) {
			newHttpError.detail = obj.detail;
		}
		return newHttpError;
	}
}
