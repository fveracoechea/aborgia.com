// import SessionManager, { MemoryStore } from "micro-session";
// import { csrfMiddleware as microCSRF } from "micro-csrf";
// import type { NextApiRequest, NextApiResponse } from 'next'

// const getSession = SessionManager({
//   store: new MemoryStore(),
//   secret: "my session secret",
// });

// const csrf = microCSRF();

// export const csrfMiddleware =  async <T = any>(req: NextApiRequest, res: NextApiResponse<T>) => {
//   const session = await getSession(req, res);
//   // This will automatically end the request with a 403 error
//   // if this is a POST, PUT, PATCH, DELETE request without a valid
//   // CSRF Token.
//   const csrfToken = await csrf(session, req, res);
//   return csrfToken
// };