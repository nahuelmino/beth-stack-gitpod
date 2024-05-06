import { Context } from "elysia";
import { auth } from "../utils/lucia";
import { NotesList } from "../views/pages/dashboard/notesList";
import { db } from "../utils/drizzle";
import { note } from "../models/db/schema";

export const notesController = async ({ cookie: { auth_session } }: Context) => {
    const { user } = await auth.getSession(auth_session.value);
    const notes = await db.select()
                          .from(note)
                          .all();

    return <NotesList name={user.name} notes={notes} />;
};
