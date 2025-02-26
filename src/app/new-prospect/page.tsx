import { Field } from "@/components/chakra-snippets/field";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/chakra-snippets/steps";
import ImageUploader from "@/components/imageUploader/imageUploader";
import {
  Button,
  Group,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import {
  LuBanknote,
  LuMapPinHouse,
  LuNotebookText,
  LuUser,
} from "react-icons/lu";

//TODO: Do we need to be logged in for this?

export default function NewProspectPage() {
  return (
    <main>
      <Stack>
        <Heading size="4xl">New prospect</Heading>
        <StepsRoot count={4} mt={3}>
          <StepsList>
            <StepsItem index={0} icon={<LuUser />} />
            <StepsItem index={1} icon={<LuMapPinHouse />} />
            <StepsItem index={2} icon={<LuBanknote />} />
            <StepsItem index={3} icon={<LuNotebookText />} />
          </StepsList>
          <StepsContent index={0}>
            <Heading mb={4}>Personal information</Heading>
            <Stack as="form">
              <Field label="Name" required>
                <Input name="name" />
              </Field>
              <Field label="Lastname" required>
                <Input name="lastname" />
              </Field>
              <Field label="Date of birth" required>
                <Input type="date" name="dateOfBirth" />
              </Field>
              <Field label="Email" required>
                <Input name="email" />
              </Field>
              <Field label="Phone number" required>
                <Input name="phone number" />
              </Field>
              <Field label="Profile photo" required>
                <ImageUploader />
              </Field>
            </Stack>
          </StepsContent>
          <StepsContent index={1}>
            <Heading mb={4}>Location information</Heading>
          </StepsContent>
          <StepsContent index={2}>
            <Heading mb={4}>Bank information</Heading>
            <Stack as="form">
              <Field label="Bank name" required>
                <Input name="bankName" />
              </Field>
              <Field label="Bank account number" required>
                <Input name="bankAccountNumber" />
              </Field>
              <Field label="Tax ID" required>
                <Input name="taxId" />
              </Field>
              <Field label="Document or passport" required>
                <ImageUploader />
              </Field>
            </Stack>
          </StepsContent>
          <StepsContent index={3}>
            <Heading mb={4}>Other information</Heading>
            <Stack as="form">
              <Field label="Relevant details" required>
                <Textarea name="relevantDetails" minH="300px" />
              </Field>
            </Stack>
          </StepsContent>
          <StepsCompletedContent>All steps are complete!</StepsCompletedContent>

          <Group>
            <StepsPrevTrigger asChild>
              <Button variant="outline" size="sm">
                Previous
              </Button>
            </StepsPrevTrigger>
            <StepsNextTrigger asChild>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </StepsNextTrigger>
          </Group>
        </StepsRoot>
      </Stack>
    </main>
  );
}
