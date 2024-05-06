import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 123123n1jkh3hjk31</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6 ">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-sm text-muted-foreground">
                Status
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-zinc-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-sm text-muted-foreground">
                Cliente
              </TableCell>
              <TableCell className="flex justify-end">
                Victor Oliveira
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-sm text-muted-foreground">
                Telefone
              </TableCell>
              <TableCell className="flex justify-end">
                (11) 99999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-sm text-muted-foreground">
                E-mail
              </TableCell>
              <TableCell className="flex justify-end">
                victor@vctrhugoop.dev
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-sm text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">há 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Grande</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 49,90</TableCell>
              <TableCell className="text-right">R$ 99,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Grande</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 49,90</TableCell>
              <TableCell className="text-right">R$ 99,80</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">R$ 199,6</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
