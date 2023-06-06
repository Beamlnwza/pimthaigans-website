import { v4 as uuidv4 } from "uuid"

const LocalUuid = async (): Promise<string> => {
  const uuid = localStorage.getItem("uuid")
  if (uuid) {
    return uuid
  }

  const selectedUuid = uuidv4()

  localStorage.setItem("uuid", selectedUuid)

  return selectedUuid
}

export default LocalUuid
