export function add(value) {
    return {
        type: 'add',
        value
    }
}

export function remove(index) {
    return {
        type: 'remove',
        index
    }
}

export function update(value, index) {
    return {
        type: 'update',
        value,
        index
    }
}

export function init(value) {
    return {
        type: 'init',
        value
    }
}