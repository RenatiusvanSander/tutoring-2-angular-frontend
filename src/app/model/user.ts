export class User {
    userId!: number;
    name!: string;
    emailVerified!: boolean;
    givenName!: string;
    familyName!: string;
    preferredUsername!: string;
    sub!: string;
    creationDate!: Date;

    static fromHttp(user : User) : User {
        const newUser = new User();
        newUser.userId = user.userId;
        newUser.name = user.name;
        newUser.emailVerified = user.emailVerified;
        newUser.givenName = user.givenName;
        newUser.familyName = user.familyName;
        newUser.preferredUsername = user.preferredUsername;
        newUser.sub = user.sub;
        newUser.creationDate = new Date();

        return newUser;
    }
}