package lesson_14_20241119;

public class MainHash {
    public static void main(String[] args) {

        // --- String -----
        String str1 = "Мама мыла раму";
        System.out.println("Hash str1 = "+str1.hashCode());
        
        String str2 = "Мама  мыла раму";
        System.out.println("Hash str2 = "+str2.hashCode());

        System.out.println(str1.hashCode() == str2.hashCode());

        // ---- User Object ------

        Object obj;

        Cat cat1 = new Cat("Вася", 15);
        System.out.println("Cat1 hash = "+cat1.hashCode());

        Cat cat2 = new Cat("Вася", 14);
        System.out.println("Cat2 hash = "+cat2.hashCode());

        System.out.println("cat1.equals(cat2) = "+cat1.equals(cat2)); 
        System.out.println("cat1 == cat2 = "+(cat1==cat2)); 
        System.out.println("cat1.hasCode == cat2.hasCode -> "+(cat1.hashCode() == cat2.hashCode())); 

        // Коллизия hashCode
        String str3 = "DB";
        System.out.println("Hash str3 = "+str3.hashCode());
        String str4 = "Ca";
        System.out.println("Hash str4 = "+str4.hashCode());
        System.out.println("str3.equals(str4) = "+str3.equals(str4)); 
        System.out.println("str3.hasCode == str4.hasCode -> "+(str3.hashCode() == str4.hashCode()));  

        Integer int1 = new Integer(5);
        System.out.println("Hash int1 = "+int1.hashCode());

        //Set<Integer> 
         

    }
}
