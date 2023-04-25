import { JSX } from 'solid-js'

type Props = {
  children: JSX.Element
}

export const PageContainer = ({ children }: Props) => {
  return <div class='w-1/3 min-w-[900px] h-full'>{children}</div>
}
