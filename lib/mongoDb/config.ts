export const mongoDbConfig = {
    endpointUrl : process.env.NEXT_MONGO_DB_URI as string,
    senderEmail: process.env.NEXT_CREATOR_EMAIL as string,
    senderEmailPassword: process.env.NEXT_CREATOR_EMAIL_PASSWORD as string,
    JWT_SECRET : process.env.NEXT_JWT_SECRET as string


}