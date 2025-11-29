"use client";

import { useToast } from "../contexts/toast-context";

/**
 * Componente de demostración del sistema de toasts.
 * Eliminar después de integrar en formularios reales.
 */
export default function ToastDemo() {
  const { success, error, info, warning } = useToast();

  return (
    <div className="w-full rounded-lg border border-gray-200 dark:border-gray-800 p-6">
      <h3 className="text-lg font-semibold mb-4">Demo de Toasts</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => success("¡Operación exitosa!")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Success
        </button>
        <button
          onClick={() => error("Algo salió mal")}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Error
        </button>
        <button
          onClick={() => info("Información importante")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Info
        </button>
        <button
          onClick={() => warning("Advertencia")}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Warning
        </button>
      </div>
    </div>
  );
}
