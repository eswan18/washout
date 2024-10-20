"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import RecordEntryForm, { NewEntryWithoutGameId } from "./record-entry-form";
import { useState } from "react";

export default function RecordEntryButton(
  { recordEntry }: { recordEntry: (entry: NewEntryWithoutGameId) => void },
) {
  const [open, setOpen] = useState(false);
  const handleSubmit = (entry: NewEntryWithoutGameId) => {
    recordEntry(entry);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Record New Entry<PlusCircle />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Add Entry</DialogHeader>
        <RecordEntryForm onSubmitEntry={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}