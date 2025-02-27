import { ProspectStatusBadge } from "@/components/prospectStatusBadge/prospectStatusBadge";
import { prospects } from "@/mockData/prospects";
import {
  Breadcrumb,
  Flex,
  Heading,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProspect(id: string) {
  return prospects.find((prospect) => prospect.id === id);
}

export default async function ProspectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const prospectId = (await params).id;
  const prospect = await getProspect(prospectId);

  if (!prospect) notFound();

  return (
    <main>
      <Stack>
        <Breadcrumb.Root mb={4}>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link asChild>
                <Link href={"/prospects"}>Prospects</Link>
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>
                {prospect.name} {prospect.lastName}
              </Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>

        <Flex alignItems="center" gap={6}>
          <Heading size="4xl">
            {prospect.name} {prospect.lastName}
          </Heading>
          <ProspectStatusBadge status={prospect.status} size="lg" />
        </Flex>
        <Heading>Personal information</Heading>
        <Flex gap={2}>
          <Text fontWeight="bold">Date of birth:</Text>
          <Text>{prospect.birthDate.toLocaleDateString()}</Text>
        </Flex>
        <Flex gap={2}>
          <Text fontWeight="bold">Email:</Text>
          <Text>{prospect.email}</Text>
        </Flex>
        <Flex gap={2}>
          <Text fontWeight="bold">Phone number:</Text>
          <Text>{prospect.phoneNumber}</Text>
        </Flex>
        <Separator />
        <Heading>Location information</Heading>
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
          height={400}
          width={"100%"}
          mode="place"
          q="Brooklyn Bridge,New York,NY"
        />
        <Separator />
        <Heading>Bank information</Heading>
        <Flex gap={2}>
          <Text fontWeight="bold">Bank name:</Text>
          <Text>{prospect.bankName}</Text>
        </Flex>
        <Flex gap={2}>
          <Text fontWeight="bold">Bank account number:</Text>
          <Text>{prospect.bankAccountNumber}</Text>
        </Flex>
        <Flex gap={2}>
          <Text fontWeight="bold">Tax ID:</Text>
          <Text>{prospect.taxId}</Text>
        </Flex>
        <Flex gap={2}>
          <Text fontWeight="bold">Document or passport:</Text>
          <Text>{prospect.document}</Text>
        </Flex>
        <Separator />
        <Heading>Other information</Heading>
        <Flex gap={2}>
          <Text fontWeight="bold">Relevant details:</Text>
          <Text>{prospect.relevantDetails}</Text>
        </Flex>
        <Flex gap={2}>
          <Text fontWeight="bold">Onboarding attempts:</Text>
          <Text>{prospect.omboardingAttempts}</Text>
        </Flex>
      </Stack>
    </main>
  );
}
