public class Test {
    public static void main(String[] args) {
        System.out.println("hello");
        System.out.println(args);
        // System.out.println(args[0]);
        // System.out.println(args[1]);
        // array -> reference address
        // x -> [1,2,3,4]
        // sequential 4bytes 
        // arr ek variable hai
        // which points at the 
        // first element address
        // 1 -> 8
        // 4 -> 32
        int a = 1;
        System.out.println(Integer.toString(a));
        for(int i = 0; i < 10; i++){
            System.out.println(i);
        }
    }
    public static void main2(String[] args) {
        System.out.println("hello 1");
    }
    public static void main3(String[] args) {
        System.out.println("hello 2");
    }
}

/**
 * 
 * function -> stack
 * garbage collection
 */