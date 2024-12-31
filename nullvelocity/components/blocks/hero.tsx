"use client";
import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { Actions } from "./actions";
import MermaidElement from "../mermaid-renderer";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  return (
    <Section color={data.color}>
      <Container
        size="large"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 items-start justify-center"
      >
        <div className="row-start-2 md:row-start-1 md:col-span-5 text-center md:text-left">
          {data.tagline && (
            <h2
              data-tina-field={tinaField(data, "tagline")}
              className="relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20"
            >
              {data.tagline}
              <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
            </h2>
          )}
          {data.headline && (
            <h3
              data-tina-field={tinaField(data, "headline")}
              className={`w-full relative mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r  ${
                  data.color === "primary"
                    ? `from-white to-gray-100`
                    : headlineColorClasses["blue"]
                }`}
              >
                {data.headline}
              </span>
            </h3>
          )}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col md:w-3/5">
              {data.text && (
                <div
                  data-tina-field={tinaField(data, "text")}
                  className={`prose prose-lg mx-auto md:mx-0 mb-10 ${
                    data.color === "primary"
                      ? `prose-primary`
                      : `dark:prose-dark`
                  }`}
                >
                  <TinaMarkdown 
                    content={data.text}
                    components={{
                      mermaid({ value }) {
                        return <MermaidElement value={value} />;
                      }
                    }}
                  />
                </div>
              )}
            </div>
            {data.image && (
              <div
                data-tina-field={tinaField(data.image, "src")}
                className="relative flex-shrink-0 md:w-2/5 flex justify-center"
              >
                <Image
                  className="w-full h-auto max-w-full rounded-lg"
                  style={{ objectFit: "cover" }}
                  alt={data.image.alt}
                  src={data.image.src}
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>
          {data.text2 && (
            <div
              data-tina-field={tinaField(data, "text2")}
              className={`prose prose-lg mx-auto md:mx-0 mb-10 ${
                data.color === "primary" ? `prose-primary` : `dark:prose-dark`
              }`}
            >
              <TinaMarkdown 
                content={data.text2}
                components={{
                  mermaid({ value }) {
                    return <MermaidElement value={value} />;
                  }
                }}
              />
            </div>
          )}
          {data.actions && (
            <div className="mt-10">
              <Actions
                className="justify-center md:justify-start py-2"
                parentColor={data.color}
                actions={data.actions}
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text-1",
      name: "text",
      type: "rich-text",
    },
    {
      type: "rich-text",
      label: "Text-2",
      name: "text2",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
