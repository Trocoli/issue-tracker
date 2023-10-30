"use client";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { Button,  TextField, TextFieldInput } from "@radix-ui/themes";

const page = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextFieldInput placeholder="Title" />
      </TextField.Root>
      <SimpleMdeReact placeholder="Description" />
      <Button>Submit</Button>
    </div>
  );
};

export default page;
