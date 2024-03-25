import nextAuth from "next-auth";
declare module "next-auth" {
    interface Session {
        user: {
            success: boolean;
            token: string;
            iat: number;
            exp: number;
            jti: string;
            data: {
                _id: string;
                SSN: string;
                name: string;
                email: string;
                telephone_number: string;
                role: string;
                createdAt: string;
                __v: number;
            }

        }
    }
}