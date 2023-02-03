from django.db import models

class User(models.Model):
    u_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    correctAnswers = models.IntegerField()

    def get_percentage(self):
        VideoDB = VideoDB.objects.get(u_id=self)
        return VideoDB.percentage

    def __str__(self):
        return self.name

class VideoDB(models.Model):
    u_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='VideoDB')
    video1_1 = models.IntegerField(default=0)
    video2_1 = models.IntegerField(default=0)
    video3_1 = models.IntegerField(default=0)
    video3_2 = models.IntegerField(default=0)
    video3_3 = models.IntegerField(default=0)
    video3_4 = models.IntegerField(default=0)
    video3_5 = models.IntegerField(default=0)
    video3_6 = models.IntegerField(default=0)
    video3_7 = models.IntegerField(default=0)
    video3_8 = models.IntegerField(default=0)
    video3_9 = models.IntegerField(default=0)
    video3_10 = models.IntegerField(default=0)
    video3_11 = models.IntegerField(default=0)
    video4_1 = models.IntegerField(default=0)
    video4_2 = models.IntegerField(default=0)
    video5_1 = models.IntegerField(default=0)
    video5_2 = models.IntegerField(default=0)
    percentage = models.IntegerField(default=0)
    def __str__(self):
        return str(self.u_id)