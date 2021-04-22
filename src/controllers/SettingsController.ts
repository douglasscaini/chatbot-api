import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {
  async create(req: Request, res: Response) {
    const { username, chat } = req.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
      username,
      chat,
    });

    await settingsRepository.save(settings);

    return res.json(settings);
  }
}

export { SettingsController };
