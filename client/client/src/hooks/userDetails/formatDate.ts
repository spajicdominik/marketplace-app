export default function FormatDate( dateCreated : string | undefined) {
  if (!dateCreated) return null; 

  const d = new Date(dateCreated);
  const formmatedDate = d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formmatedDate;
}