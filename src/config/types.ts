export interface DatabaseConnectDetails {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

// Interface for the class that holds secret info and is ignored by GIT
export interface SecretInfo {
    getDatabaseInfo: () => DatabaseConnectDetails;
    getJwtSecret: () => string;
}
