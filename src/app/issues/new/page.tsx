"use client";

import { Button, TextArea, TextField, TextFieldInput } from "@radix-ui/themes";

const page = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextFieldInput placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit</Button>
    </div>
  );
};

export default page;
