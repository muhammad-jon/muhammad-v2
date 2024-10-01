import React from "react";
import splitArray from "../../../helpers/splitArray";
import Highlight, {
  Props as HighlightProps,
  ValidUrlType,
} from "../../Highlight";

interface ProjectType extends HighlightProps {
  project?: boolean;
}

interface Props {}

const PinnedProjects: React.FC<Props> = () => {
  const splitProjectsInTwos: ProjectType[][] = React.useCallback(() => {
    const pinnedProjects: ProjectType[] = [
      {
        tags: ["ReactJS", "Material UI"],
        badge: "Code",
        label: "Rapid Diligense",
        project: true,
        description:
          "Rapid Diligence provides comprehensive operational, financial, and technical due diligence services for small and medium-sized businesses (SMB) buyers.",
        urls: [
          {
            url: "https://rapiddiligence.com/",
            type: ValidUrlType.Link,
            label: "Preview",
          },
          {
            url: "https://rapiddiligence.com/quote/",
            type: ValidUrlType.Link,
            label: "Open",
          },
        ],
      },
      {
        tags: ["React", "Firebase", "Material UI"],
        badge: "Platform",
        label: "IlmHub",
        project: true,
        description: "Online learning platform.",
        urls: [
          {
            url: "",
            type: ValidUrlType.Video,
            label: "Preview",
          },
          {
            url: "",
            type: ValidUrlType.Link,
            label: "Open",
          },
          {
            url: "",
            type: ValidUrlType.Link,
            label: "View Code",
          },
        ],
      },
      {
        tags: ["React", "Instructure UI"],
        badge: "LMS",
        label: "Student Hunter",
        project: true,
        description:
          "We built Student Hunter web-site. We used one of the biggest UI library Instructure UI",
        urls: [
          {
            url: "https://studenthunter.org/",
            type: ValidUrlType.Video,
            label: "Preview",
          },
          {
            url: "https://studenthunter.org/",
            type: ValidUrlType.Link,
            label: "Open",
          },
        ],
      },
      {
        tags: ["React", "Bootstrap", "CSS3", "Firebase"],
        badge: "Fun game",
        label: "Friendship test",
        project: true,
        description:
          "Fun game for test your friend's knowladge about your interests",
        urls: [
          {
            url: "https://friendshiptest.uz/",
            type: ValidUrlType.Video,
            label: "Preview",
          },
          {
            url: "https://friendshiptest.uz/",
            type: ValidUrlType.Link,
            label: "Open",
          },
          {
            url: "https://github.com/muhammad-jon/frnd",
            type: ValidUrlType.Link,
            label: "View Code",
          },
        ],
      },
      {
        tags: ["React", "Tailwind"],
        badge: "Clone",
        label: "Apple Iphone website",
        project: true,
        description: "Apple iphone 16 pro introduction website clone",
        urls: [
          {
            url: "https://iphone3dwebsite-4c7s.vercel.app/",
            type: ValidUrlType.Video,
            label: "Preview",
          },
          {
            url: "https://iphone3dwebsite-4c7s.vercel.app/",
            type: ValidUrlType.Link,
            label: "Open",
          },
          {
            url: "https://github.com/muhammad-jon/iphone3dwebsite",
            type: ValidUrlType.Link,
            label: "View Code",
          },
        ],
      },
      {
        tags: ["React", "CSS3", "Bootstrap"],
        badge: "Code",
        label: "Gulbazar",
        project: true,
        description:
          "Gulbazar project, where people can buy and sell their flowers, it connect custumer and seller",
        urls: [
          {
            url: "https://play.google.com/store/apps/details?id=com.bizmiz.gulbozor&hl=uz",
            type: ValidUrlType.Video,
            label: "Preview",
          },
          {
            url: "https://play.google.com/store/apps/details?id=com.bizmiz.gulbozor&hl=uz",
            type: ValidUrlType.Link,
            label: "Open",
          },
        ],
      },
      {
        tags: ["React", "Tailwind"],
        badge: "Soon",
        label: "Soon",
        project: true,
        description:
          "Other projects will appear soon, visit my github, click button below",
        urls: [
          {
            url: "https://github.com/muhammad-jon",
            type: ValidUrlType.Link,
            label: "View Git Hub profile",
          },
        ],
      },
    ];

    return splitArray(pinnedProjects, 2);
  }, [])();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-[20px] items-start justify-start mx-auto">
      {splitProjectsInTwos.map((projects) =>
        projects.map((project, index: number) => (
          <Highlight
            key={`highlight-${index}`}
            toggle={true}
            urls={project?.urls}
            badge={project?.badge}
            label={project.label}
            description={project?.description}
            tags={project?.tags}
          />
        ))
      )}
    </div>
  );
};

export default PinnedProjects;
