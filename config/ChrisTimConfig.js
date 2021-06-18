// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo ChrisTim",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": false,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "Testsets": [
    //    
    {
      "Name": "Christians Lieblingsvideos",
      "TestID": "id1_1",
      "Files": {
            "Reference": "video/00/reference.wav",
            "1": "video/00/reference.wav",
            "2": "video/00/reference.wav",
        }
    },
    {
      "Name": "Tims Videospaß",
      "TestID": "id1_2",
      "Files": {
            "Reference": "video/00/reference.wav",
            "1": "video/00/synthesized_merkel.wav",
            "2": "video/00/synthesized_thorsten.wav",
	    //"3": "video/00/synthesized_merkel.wav",
            //"4": "video/00/synthesized_thorsten.wav",
        }
    },
  ]
}
