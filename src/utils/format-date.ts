export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", options)
}
