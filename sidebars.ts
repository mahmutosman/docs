import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "doc",
      label: "Getting Started",
      id: "getting-started",
    },
    {
      type: "category",
      label: "Operator Guide",
      link: {
        type: "generated-index",
        title: "Overview",
        description:
          "This guide provides a brief overview about the information needed to configure and run an attestation node on testnet and mainnet network using the CLI.",
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Supported Chains",
          id: "operator-guide/supported-chains",
        },
        {
          type: "doc",
          label: "System Requirements",
          id: "operator-guide/system-requirements",
        },
        {
          type: "category",
          label: "Run an Attestation Node using CLI",
          link: {
            type: "generated-index",
            title: "Run an Attestation Node using CLI",
          },
          collapsed: true,
          items: [
            {
              type: "doc",
              label: "Pre-requisite Installations",
              id: "run-node/prerequisite-installation",
            },
            {
              type: "doc",
              label: "Configuration File",
              id: "run-node/configuration-file",
            },
            {
              type: "doc",
              label: "Commands",
              id: "run-node/commands",
            },
            {
              type: "doc",
              label: "Set up Keystore",
              id: "run-node/setup-keystore",
            },
            {
              type: "doc",
              label: "Register Operator",
              id: "run-node/register-operator",
            },
            {
              type: "doc",
              label: "Deploy Attestation Node",
              id: "run-node/deploy",
            },
            {
              type: "doc",
              label: "Monitoring",
              id: "run-node/monitoring",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
