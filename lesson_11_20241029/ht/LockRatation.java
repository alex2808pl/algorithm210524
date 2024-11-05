public class LockRatation {
    public static void main(String[] args) {

        //        Ввод: Ввод = 2345, Код разблокировки = 5432
        //        Выход: требуется оборотов = 8
        
                int input = 2345;
                int unlockCode = 5432;
        
                int resultRotation = minCountRotation(input, unlockCode);
                System.out.println("Min rotation for input: " + input + " is " + resultRotation);
            }
        
            private static int minCountRotation(int input, int unlockCode) {
                int rotation = 0;
                int inputDigit;
                int unlockCodeDigit;
        
                while (input > 0 || unlockCode > 0) {
                    inputDigit = input % 10;
                    unlockCodeDigit = unlockCode % 10;
        
                    int forwardRotation = Math.abs(inputDigit - unlockCodeDigit);
                    int backRotation = 10 - Math.abs(inputDigit - unlockCodeDigit);
                    int minRotation = Math.min(forwardRotation, backRotation);
        
                    rotation = rotation + minRotation;
        
                    input = input / 10;
                    unlockCode = unlockCode / 10;
                }
        
                return rotation;
            }
}
