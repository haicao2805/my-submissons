import { ObjectId } from "bson";
import express from "express";
import { User } from "../models/users";
import { getDb } from "../app/db";
import { UserValidator } from "../models/users";

const userController = express.Router();

userController.get("/:id", async (req, res) => {
    const id = req.params.id;
    if (id.length > 24) {
        return res.json({
            data: null,
            message: "",
            errorMessage: "Not found",
        });
    }
    let result = await getDb()
        .collection<User>("users")
        .findOne({ _id: new ObjectId(id) });

    if (result == null) {
        return res.json({
            data: result,
            message: "",
            errorMessage: "Not found",
        });
    }
    return res.json({
        data: result,
        message: "",
        errorMessage: "",
    });
});

userController.get("/", async (req, res) => {
    const nameParam = req.query.name;
    let result: User[];

    if (!nameParam) {
        result = await getDb().collection<User>("users").find().toArray();
        return res.json({
            data: result,
            message: "",
            errorMessage: "",
        });
    }
    result = await getDb()
        .collection<User>("users")
        .find({
            $or: [
                { username: { $regex: ".*" + nameParam + ".*" } },
                { email: { $regex: ".*" + nameParam + ".*" } },
            ],
        })
        .toArray();
    return res.json({
        data: result,
        message: "",
        errorMessage: "",
    });
});

userController.post("/", async (req, res) => {
    const { error } = UserValidator.validateUser(req.body);
    if (error) {
        return res
            .status(400)
            .json({ data: [], message: "", errorMessage: error.message });
    }

    const user: User = {
        _id: req.body._id,
        username: req.body.username,
        email: req.body.email,
        birthday: req.body.birthday,
    };

    await getDb()
        .collection<User>("users")
        .findOneAndUpdate(
            { _id: new ObjectId(user._id) },
            {
                $set: {
                    username: user.username,
                    email: user.email,
                    birthday: user.birthday,
                },
            }
        );

    return res.status(200).send({
        data: null,
        message: "Update success",
        errorMessage: "",
    });
});

export default userController;
