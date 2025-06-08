import { Label, Textarea, TextInput } from "flowbite-react";
import { Button } from "./ui/button";

export default function ContactUsForm() {
  return (
    <form className="flex flex-col gap-4 items-start w-full  p-4 md:max-w-2xl">
      <div className="w-full  h-full bg-green-300 flex-col flex gap-4 px-2 py-4 rounded-md">
        <div className="block">
          <Label htmlFor="name">Name</Label>
        </div>
        <div>
          <TextInput
            id="name"
            type="text"
            placeholder="your given names"
            className="items-center custom-input"
          />
        </div>
        <div>
          <div className="block">
            <Label htmlFor="password1">Your email</Label>
          </div>
          <TextInput
            id="password1"
            type="email"
            placeholder="youremail@domain.com"
            required
            className="custom-input"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <TextInput
            id="phone"
            type="number"
            placeholder="07******"
            className="custom-input"
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="enter your message here"
            required
            rows={5}
          />
        </div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}
