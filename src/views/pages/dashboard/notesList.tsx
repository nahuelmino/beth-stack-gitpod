import { Note } from "../../../models/notes.model";
import { BaseHTML } from "../../templates/BaseHTML";

interface NotesListProps {
  name: string;
  notes: Array<Note>
}

export const NotesList = async ({ name, notes }: NotesListProps) => {
    return (
      <BaseHTML>
        <header class="flex items-center justify-between bg-gradient-to-b from-zinc-200 to-transparent p-4">
          <div class="flex items-center gap-2">
            <img src="public/logo.svg" width="24px" height="24px" />
            <div class="text-lg font-bold tracking-tighter">BETH.</div>
          </div>
          <nav class="flex items-center gap-4">
            <p class="font-medium" safe>
              {name}
            </p>
            <form method="post" action="/logout">
              <button>Logout</button>
            </form>
          </nav>
        </header>
        <main class="m-auto mt-12 max-w-4xl space-y-12">
          <section class="space-y-2">
            <h4>Here is the notes list</h4>
          </section>
          <section class="space-y-3">
            { 
            notes.map(note => {
              <>
                <h3>{ note.title }</h3>
                <p>{ note.body }</p>
              </>
            })
            }
          </section>
        </main>
      </BaseHTML>
    );
  };