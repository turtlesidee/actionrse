import React, { FC, useState } from "react"
import search_user from "../../mutations/search-user"
import { useMutation } from "@blitzjs/rpc"
import debounce from "lodash.debounce"

type SearchUserProps = {
  role: string,
  onClick: (user: any) => void
}
const SearchUser: FC<SearchUserProps> = ({ role, onClick }) => {
  const [search] = useMutation(search_user)
  const [users, setUsers] = useState([] as any)

  const handleSearch = debounce(async (e) => {
    try {
      const users = await search({name: e.target.value, role })
      setUsers(users)
    } catch(e) {
      setUsers([])
    }

  }, 200)


  return (
    <div className="px-[12px] mt-[30px]">
        <input
          type='text'
          onChange={(e) => handleSearch(e) }
          className="w-full h-[50px] m-auto pl-2 rounded-lg bg-neutral-100 border border-neutral-400 focus:border-neutral-500 text-neutral-600 appearance-none outline-none text-[16px] font-light"
          placeholder={`Rechercher par nom`}
        />
        <div className="mt-[10px] overflow-y-scroll">
          {users.map((user) => (
            <div
              key={user.id}
              className='border-b border-neutral-400 cursor-pointer hover:bg-neutral-200 text-[18px] my-[10px] p-[10px]'
              onClick={() => onClick({ lastname: user.lastname, firstname: user.firstname, email: user.email, avatar_url: user.avatar_url, id: user.id})}
            >
              {user.lastname} {user.firstname}
            </div>
          ))}
        </div>
    </div>
  )
}

export default SearchUser
