export function statusColor(status) {
    // map colors based on status
    // done, completed, closed -> success
    // in progress, open -> inprogress
    // new -> new
    // default -> default

    console.log(`status: ${status}`);

    if (!status) {
        return 'default';
    }
    const s = status.toLowerCase();

    if (s === 'done' || s === 'completed' || s === 'closed' || s === 'resolved') {
        return 'success';
    }
    if (s === 'in progress') {
        return 'inprogress';
    }
    if (s === 'new' || s === 'open') {
        return 'new';
    }
    return 'default';
}

