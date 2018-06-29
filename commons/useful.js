class Useful {
    static evalValue(min, max, quantity) {
        let new_max = max - min;
        let new_q = quantity - min;
        return new_q / new_max;
    }
}