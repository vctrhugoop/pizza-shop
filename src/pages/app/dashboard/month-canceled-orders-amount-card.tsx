import { useQuery } from '@tanstack/react-query'
import { BookmarkX } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-order-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersAmountCard() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelados (mês)
        </CardTitle>
        <BookmarkX className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-sm text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  {monthCanceledOrdersAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  +{monthCanceledOrdersAmount.diffFromLastMonth}%
                </span>
              )}{' '}
              em relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
