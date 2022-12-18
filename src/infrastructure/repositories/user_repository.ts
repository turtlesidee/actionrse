import db from "../../../db"

const search = async (name: string, role: string) => {
  return await db.user.findMany({
    where: {
      AND: [
        {
          lastname: {
            contains: name
          },
          role: role
        }
      ]
    }
  });
}


const user_repository = {
  search
}

export default user_repository
