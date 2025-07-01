import React, { useEffect, useState } from "react";
import matter from "gray-matter";

const ContactPage = () => {
  const [data, setData] = useState({ email: "", phone: "" });

  useEffect(() => {
    fetch("/content/contact.md")
      .then((res) => res.text())
      .then((text) => {
        const parsed = matter(text);
        setData(parsed.data);
      });
  }, []);

  return (
    <div>
      <h1>Контакти</h1>
      <p>Email: {data.email}</p>
      <p>Телефон: {data.phone}</p>
    </div>
  );
};

export default ContactPage;
