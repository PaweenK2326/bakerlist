export function translate(text: string) {
  switch (text) {
    case "my-recipes":
      return "สูตรของฉัน";

    case "ingredients":
      return "รายการวัตถุดิบ";

    case "new-recipes":
      return "เพิ่มสูตรใหม่";

    default:
      return text;
  }
}
