import { atom } from 'recoil';


export const mission_state_atom = atom({
  key: 'mission_state_atom',
  default: {
    id: 0,
    public_id: '',
    step: 1,
    company: {
      name: ''
    }
  }
})
