import express, { Request, Response } from "express";

import { deleteUserById, getUsers } from "../db/users";
import mongoose from "mongoose";
import { UserModel } from "../db/users";
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(403);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteUser = await deleteUserById(id);
    return res.json(deleteUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { username } = req.body;

//     if (!username) {
//       return res.sendStatus(400);
//     }

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.sendStatus(400);
//     }

//     const user = await getUserById(id);

//     if (!user) {
//       return res.sendStatus(404);
//     }

//     user.username = username;
//     await user.save();

//     return res.status(200).json(user).end();
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(400);
//   }
// };

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.sendStatus(400);
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { username },
      { new: true }
    );

    if (!updatedUser) {
      return res.sendStatus(404);
    }

    return res.status(200).json(updatedUser).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
