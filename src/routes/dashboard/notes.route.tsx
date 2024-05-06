import { Elysia } from 'elysia';
import { notesController } from '../../controllers/notes.controller';

export const notesRouter = new Elysia()
    .get('/dashboard/notes', notesController)

