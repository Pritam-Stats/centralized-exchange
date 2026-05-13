import "dotenv/config";

function readRequiredEnv(name: string): string{
    const val = process.env[name];
    if (!val) throw new Error(`Missing required env variable ${name}`);
    return val;
}

export const env = {
    port: Number (process.env.PORT ?? 3000),
    jwtSecret: readRequiredEnv('JWT_SECRET')

}