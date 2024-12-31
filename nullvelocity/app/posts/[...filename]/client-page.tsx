"use client";
import React from "react";
import Image from "next/image";
import { useLayout } from "../../../components/layout/layout-context";
import { Section } from "../../../components/layout/section";
import { Container } from "../../../components/layout/container";
import { tinaField, useTina } from "tinacms/dist/react";
import { format } from "date-fns";
import { PostQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "../../../components/mdx-components";
import MermaidElement from "../../../components/mermaid-renderer";

const titleColorClasses = {
  blue: "from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500",
  teal: "from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500",
  green: "from-green-400 to-green-600",
  red: "from-red-400 to-red-600",
  pink: "from-pink-300 to-pink-500",
  purple:
    "from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500",
  orange:
    "from-orange-300 to-orange-600 dark:from-orange-200 dark:to-orange-500",
  yellow:
    "from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-500",
};

interface ClientPostProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function PostClientPage(props: ClientPostProps) {
  const { theme } = useLayout();
  const { data } = useTina({ ...props });
  const post = data.post;

  const date = new Date(post.date);
  let formattedDate = "";
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, "MMM dd, yyyy");
  }

  return (
    <Section className="flex-1">
      <Container width="small" className={`flex-1 pb-2`} size="large">
        <h2
          data-tina-field={tinaField(post, "title")}
          className={`w-full relative	mb-8 text-6xl font-extrabold tracking-normal text-center title-font`}
        >
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${
              titleColorClasses[theme.color]
            }`}
          >
            {post.title}
          </span>
        </h2>
        <div
          data-tina-field={tinaField(post, "author")}
          className="flex items-center justify-center mb-16"
        >
          {post.author && (
            <>
              <div className="flex-shrink-0 mr-4">
                <Image
                  data-tina-field={tinaField(post.author, "avatar")}
                  className="h-14 w-14 object-cover rounded-full shadow-sm"
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={500}
                  height={500}
                />
              </div>
              <p
                data-tina-field={tinaField(post.author, "name")}
                className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white"
              >
                {post.author.name}
              </p>
              <span className="font-bold text-gray-200 dark:text-gray-500 mx-2">
                —
              </span>
            </>
          )}
          <p
            data-tina-field={tinaField(post, "date")}
            className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150"
          >
            {formattedDate}
          </p>
        </div>
      </Container>
      {post.heroImg && (
        <div className="px-4 w-full">
          <div
            data-tina-field={tinaField(post, "heroImg")}
            className="relative max-w-4xl lg:max-w-5xl mx-auto"
          >
            <Image
              src={post.heroImg}
              alt={post.title}
              className="absolute block rounded-lg w-full h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              aria-hidden="true"
              width={500}
              height={500}
            />
            <Image
              src={post.heroImg}
              alt={post.title}
              width={500}
              height={500}
              className="relative z-10 mb-14 block rounded-lg w-full h-auto opacity-100"
            />
          </div>
        </div>
      )}
      <Container className={`flex-1 pt-4`} width="small" size="large">
        <div
          data-tina-field={tinaField(post, "_body")}
          className="prose dark:prose-dark w-full max-w-none"
        >
          <TinaMarkdown 
            content={post._body}
            components={{
              ...components,
              mermaid({ value }) {
                return <MermaidElement value={value} />;
              }
            }}
          />
        </div>
      </Container>
    </Section>
  );
}
