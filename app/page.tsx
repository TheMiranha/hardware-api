'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCallback, useEffect, useState } from "react"

const Page = () => {

  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<{ name: string }[]>([])

  const search = useCallback(async () => {
    const res = await fetch('/api/hardware/search?term=' + input).then(a => a.json())
    setResult(res.filter((_: any, b: number) => b < 15))
  }, [input])

  return (
    <div className='h-[100dvh] w-[100dvw] grid place-items-center'>
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Pesquise aqui..."
          />
          <Button onClick={search}>
            Pesquisar
          </Button>
        </div>
        <ScrollArea className='h-96'>
          {
            result.map(r => (
              <div key={r.name}>
                {r.name}
              </div>
            ))
          }
        </ScrollArea>
      </div>
    </div>
  )
}

export default Page