import * as Joi from "joi";
import { ObjectId } from "mongodb";

export class User {
    _id: ObjectId;
    username: string;
    email: string;
    birthday: Date;
}

export class UserValidator {
    static validator(field: keyof User) {
        switch (field) {
            case "_id":
                return Joi.string().required();
            case "username":
                return Joi.string().min(5).max(50).required();
            case "email":
                return Joi.string().min(5).max(255).email().required();
            case "birthday":
                return Joi.date().required();
        }
    }

    static validateUser(param: keyof User) {
        const schema = Joi.object({
            _id: this.validator("_id"),
            username: this.validator("username"),
            email: this.validator("email"),
            birthday: this.validator("birthday"),
        });
        return schema.validate(param);
    }
}
