"use client";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import {
  Button,
  Callout,
  CalloutText,
  TextField,
  TextFieldInput,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  console.log(register("title"));

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <CalloutText>{error}</CalloutText>
        </Callout.Root>
      )}
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("Something went wrong");
          }
        })}
      >
        <TextField.Root>
          <TextFieldInput placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description" {...field} />
          )}
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
