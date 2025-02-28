import { toaster } from "@/components/chakra-snippets/toaster";
import "client-only";
import { useCallback, useState } from "react";

export type UseAsyncState<T> = {
  data: T | undefined;
  error: boolean;
  isSuccess: boolean;
  isLoading: boolean;
};

export type Options = {
  showGenericError: boolean;
};

export function useAsyncCallback<Args extends unknown[], ResolvedType>(
  callback: (...args: Args) => Promise<ResolvedType>,
  { showGenericError }: Options = { showGenericError: true }
): [
  UseAsyncState<ResolvedType>,
  (...args: Args) => Promise<ResolvedType | undefined>
] {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ResolvedType>();

  const _callback = useCallback(
    async (...args: Args) => {
      try {
        setIsLoading(true);
        const result = await callback(...args);

        setData(result);
        setIsSuccess(true);

        return result;
      } catch (e) {
        setError(true);

        if (showGenericError) {
          toaster.error({
            description: "Something went wrong, please try again later",
          });
        }

        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [callback, showGenericError]
  );

  return [{ data, error, isLoading, isSuccess }, _callback];
}
