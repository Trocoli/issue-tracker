import React from "react";
import IssuesPage from "./IssuesPage";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">NEw issue</Link>
      </Button>
    </div>
  );
};

export default page;
