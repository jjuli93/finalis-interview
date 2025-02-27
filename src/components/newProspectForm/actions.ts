//TODO: fix
export function submitForm(values: any) {
  const formData = new FormData();
  const {
    profilePhoto,
    document,
    address,
    bankAccountNumber,
    bankName,
    birthDate,
    email,
    lastName,
    name,
    phoneNumber,
    taxId,
    relevantDetails,
  } = values;

  formData.append("document", document);
  formData.append("name", name);
  formData.append("profilePhoto", profilePhoto);
  formData.append("bankAccountNumber", bankAccountNumber);
  formData.append("bankName", bankName);
  formData.append("birthDate", birthDate);
  formData.append("email", email);
  formData.append("lastName", lastName);
  formData.append("phoneNumber", phoneNumber);
  formData.append("taxId", taxId);
  formData.append("relevantDetails", relevantDetails ?? "");
  formData.append("relevantDetails", relevantDetails ?? "");
  formData.append("country", address.country);
  formData.append("city", address.city);
  formData.append("fullAddress", address.fullAddress);
  formData.append("location", JSON.stringify(address.location));

  console.log({ formData });
}
