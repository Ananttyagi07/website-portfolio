import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const body = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      message: form.get("message") as string,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus(data?.error || "error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Name"
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        className="w-full p-2 border rounded h-32"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Send
      </button>
      <div className="text-sm text-gray-600">{status}</div>
    </form>
  );
}
