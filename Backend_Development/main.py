

class Account: 

    @staticmethod
    def validate_ID(id: str) -> None:
        if (len(id) != 5):
            raise ValueError("ID length should be exactly 5.")
        
    def __init__(self, ID: str, name: str) -> None : 
        Account.validate_ID(ID)
        self._ID = ID
        self.name = name

    @property
    def ID(self) -> str:
        return self._ID


class StudentAccount(Account):


    def __init__(self, ID: str, name: str) -> None:
        super().__init__(ID, name)
        self.classes: set[str] = set()
        self.is_enlistment_locked: bool = False
        self.is_enlisted: bool = False

    def add_class(self, classTitle: str):
        self.classes.add(classTitle)

    # lock enlistment, prevent relocking if already locked
    def lockEnlistment(self):
        if (self.is_enlistment_locked):
            return print("You have already locked your enlistment.")
        self.is_enlistment_locked = True
        print(f"{self.name} has locked enlistment.")

class AdviserAccount(Account):
    def __init__(self, ID: str, name: str):
        super().__init__(ID, name)
        self.advisees: set[StudentAccount] = set()
        self.enlisted_advisees: set[StudentAccount] = set()

    # add advisee, prevent duplicate if student is already an advisee of advisor
    def add_advisee(self, student: StudentAccount):
        if (student not in self.advisees):
            self.advisees.add(student)
            print(f"{self.name} has added {student.name} as an advisee.")
        else:
            print(f"{student.name} is already an advisee of {self.name}")


    """
    lock enlistment ((enlist student)) if not enlisted
    prevents duplicate
    prevents enlistment if student hasnt locked their enlistment
    """
    def lock_enlistment_for(self, student: StudentAccount):
        if (student not in self.advisees):
            print(f"Error: {student.name} is not an advisee of {self.name}.")
        elif (student.is_enlisted):
            print(f"Student is already enlisted.")
        elif (student.is_enlistment_locked):
            self.enlisted_advisees.add(student)
            student.is_enlisted = True
            print(f"{student.name} is now enlisted.")
        else:
            print(f"Error: {student.name}'s enlistment is not locked yet.")
        
student1 = StudentAccount("32131", "Ross")
student1.add_class("Class 1")
student1.add_class("Class 2")
student1.add_class("Class 4")
student1.lockEnlistment()

adviser = AdviserAccount("01341", "Rachel")
adviser.add_advisee(student1)
adviser.lock_enlistment_for(student1)

student2 = StudentAccount("12345", "Chandler")
student2.add_class("Class 1")
student2.add_class("Class 3")

adviser.add_advisee(student2)
adviser.lock_enlistment_for(student2)

student3 = StudentAccount("01353", "Joey")
student3.add_class("Class 5")
student3.add_class("Class 9")

adviser.lock_enlistment_for(student3)


